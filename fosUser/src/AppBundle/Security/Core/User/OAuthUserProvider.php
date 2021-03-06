<?php
namespace AppBundle\Security\Core\User;

use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\FOSUBUserProvider as BaseClass;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserChecker;
use Symfony\Component\Security\Core\User\UserInterface;
/**
 * Class OAuthUserProvider
 * @package AppBundle\Security\Core\User
 */
class OAuthUserProvider extends BaseClass
{
    /**
     * {@inheritdoc}
     */

    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
    {
        $socialID = $response->getUsername();
        $user = $this->userManager->findUserBy(array($this->getProperty($response)=>$socialID));
        $email = $response->getEmail();
        //check if the user already has the corresponding social account
        if (null === $user) {
            //check if the user has a normal account
            $user = $this->userManager->findUserByEmail($email);

            if (null === $user || !$user instanceof UserInterface) {
                //if the user does not have a normal account, set it up:
                $user = $this->userManager->createUser();
                $user->setEmail($email);
                $password = md5(uniqid());

                /* Codigo para mandar el mail, no funciona por ahora */
                $mailer = $this->properties['mailer'];

                // Create a message
                $message = \Swift_Message::newInstance("Bienvenido a Quempanadas!")
                // Set the From address with an associative array
                ->setFrom((array('pruebasdpsit@gmail.com' => 'Quempanadas')))
                // Set the To addresses with an associative array
                ->setTo((array($email => $email)))
                // Give it a body
                ->setBody('Le damos la bienvenida a Quempanadas, su contraseña de inicio de sesión es: '. $password);

                // Send the message
                $result = $mailer->send($message);

                $user->setPlainPassword($password);
                $user->setEnabled(true);
                $user->setUsername($email);
            }
            //then set its corresponding social id
            $service = $response->getResourceOwner()->getName();
            switch ($service) {
                case 'google':
                    $user->setGoogleID($socialID);
                    break;
                case 'facebook':
                    $user->setFacebookID($socialID);
                    break;
            }
            $this->userManager->updateUser($user);
        } else {
            //and then login the user
            $checker = new UserChecker();
            $checker->checkPreAuth($user);
        }

        return $user;
    }
}