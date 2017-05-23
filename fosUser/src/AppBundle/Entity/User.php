<?php
// src/AppBundle/Entity/User.php

namespace AppBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }

    /**
    * @var string
    *
    * @ORM\Column(name="facebook_id", type="string", nullable=true)
    */
   private $facebookID;

   public function setFacebookID($facebookID)
   {
       $this->facebookID = $facebookID;
       //$this->username = $facebookID;

       return $this;
   }

   /**
    * @var string
    *
    * @ORM\Column(name="google_id", type="string", nullable=true)
    */
   private $googleID;

   public function setGoogleID($googleID)
   {
       $this->googleID = $googleID;
       //$this->username = $googleID;

       return $this;
   }
}
