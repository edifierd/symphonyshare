<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\RedirectResponse;
use FOS\UserBundle\Controller\SecurityController as BaseController;


class SecurityController extends BaseController
{

	 protected function renderLogin (array $data)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            $this->container->get('session')->getFlashBag()->add('fos_user_error', "Ya hay un usuario loggeado.");
            return new RedirectResponse($this->container->get ('router')->generate ('fos_user_profile_show'));
        }

        $template = sprintf ('FOSUserBundle:Security:login.html.twig');
        return $this->container->get ('templating')->renderResponse ($template, $data);
    }
}
