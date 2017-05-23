<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\RedirectResponse;
use FOS\UserBundle\Controller\RegistrationController as BaseController;


class RegistrationController extends BaseController
{

	public function registerAction()
    {
       	if ($this->container->get('security.authorization_checker')->isGranted('ROLE_USER')) {
           $this->container->get('session')->getFlashBag()->add('fos_user_error', "Ya hay un usuario loggeado.");
           return new RedirectResponse($this->container->get ('router')->generate ('fos_user_profile_show'));
        }
       	return parent::registerAction();
    }
}