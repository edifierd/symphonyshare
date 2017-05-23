<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Entity\User as BaseUser;

/**
 * Cliente
 *
 * @ORM\Table(name="cliente")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ClienteRepository")
 */
class Cliente extends BaseUser
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nombre", type="string", length=100)
     */
    private $nombre;

    /**
     * @var string
     *
     * @ORM\Column(name="apellido", type="string", length=100)
     */
    private $apellido;

    /**
     * @var int
     *
     * @ORM\Column(name="dni", type="integer", nullable=true, unique=true)
     */
    private $dni;

    /**
     * @var array
     *
     * @ORM\Column(name="telefonos", type="json_array", nullable=true)
     */
    private $telefonos;

    /**
     * @var datetime
     *
     * @ORM\Column(name="fechaNacimiento", type="datetime", nullable=true)
     */
    private $fechaNacimiento;

    /**
     * @ORM\OneToMany(targetEntity="Pedido", mappedBy="cliente")
     */
    private $pedidos;

    /**
    * @var string
    *
    * @ORM\Column(name="facebook_id", type="string", nullable=true)
    */
   private $facebookID;

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

    public function __toString()
    {
        return $this->apellido.', '.$this->nombre;
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nombre
     *
     * @param string $nombre
     *
     * @return Cliente
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get nombre
     *
     * @return string
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set apellido
     *
     * @param string $apellido
     *
     * @return Cliente
     */
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;

        return $this;
    }

    /**
     * Get apellido
     *
     * @return string
     */
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * Set dni
     *
     * @param integer $dni
     *
     * @return Cliente
     */
    public function setDni($dni)
    {
        $this->dni = $dni;

        return $this;
    }

    /**
     * Get dni
     *
     * @return int
     */
    public function getDni()
    {
        return $this->dni;
    }

    /**
     * Set telefonos
     *
     * @param array $telefonos
     *
     * @return Cliente
     */
    public function setTelefonos($telefonos)
    {
        $this->telefonos = $telefonos;

        return $this;
    }

    /**
     * Get telefonos
     *
     * @return array
     */
    public function getTelefonos()
    {
        return $this->telefonos;
    }

    /**
     * Set fechaNacimiento
     *
     * @param \DateTime $fechaNacimiento
     *
     * @return Cliente
     */
    public function setFechaNacimiento($fechaNacimiento)
    {
        $this->fechaNacimiento = $fechaNacimiento;

        return $this;
    }

    /**
     * Get fechaNacimiento
     *
     * @return \DateTime
     */
    public function getFechaNacimiento()
    {
        return $this->fechaNacimiento;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
        $this->pedidos = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add pedido
     *
     * @param \AppBundle\Entity\Pedido $pedido
     *
     * @return Cliente
     */
    public function addPedido(\AppBundle\Entity\Pedido $pedido)
    {
        $this->pedidos[] = $pedido;

        return $this;
    }

    /**
     * Remove pedido
     *
     * @param \AppBundle\Entity\Pedido $pedido
     */
    public function removePedido(\AppBundle\Entity\Pedido $pedido)
    {
        $this->pedidos->removeElement($pedido);
    }

    /**
     * Get pedidos
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPedidos()
    {
        return $this->pedidos;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Cliente
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }
}
