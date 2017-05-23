<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comercio
 *
 * @ORM\Table(name="comercio")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ComercioRepository")
 */
class Comercio
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="razonSocial", type="string", length=150, unique=true)
     */
    private $razonSocial;

    /**
     * @var array
     *
     * @ORM\Column(name="telefonos", type="json_array", nullable=true)
     */
    private $telefonos;

    /**
     * @var int
     *
     * @ORM\Column(name="cuit_cuil", type="integer", nullable=true)
     */
    private $cuit;

    /**
     * @var string
     *
     * @ORM\Column(name="direccion", type="string", length=255, nullable=true)
     */
    private $direccion;

    /**
     * @ORM\ManyToMany(targetEntity="Producto", inversedBy="comercios", fetch="EXTRA_LAZY")
     * @ORM\JoinTable(name="comercio_producto")
     * @ORM\OrderBy({"descripcion" = "ASC"})
     */
    private $productos;

    public function __toString()
    {
        return $this->razonSocial.' '.$this->cuit;
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->productos = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set razonSocial
     *
     * @param string $razonSocial
     *
     * @return Comercio
     */
    public function setRazonSocial($razonSocial)
    {
        $this->razonSocial = $razonSocial;

        return $this;
    }

    /**
     * Get razonSocial
     *
     * @return string
     */
    public function getRazonSocial()
    {
        return $this->razonSocial;
    }

    /**
     * Set telefonos
     *
     * @param array $telefonos
     *
     * @return Comercio
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
     * Set cuit
     *
     * @param integer $cuit
     *
     * @return Comercio
     */
    public function setCuit($cuit)
    {
        $this->cuit = $cuit;

        return $this;
    }

    /**
     * Get cuit
     *
     * @return int
     */
    public function getCuit()
    {
        return $this->cuit;
    }

    /**
     * Set direccion
     *
     * @param string $direccion
     *
     * @return Comercio
     */
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }

    /**
     * Get direccion
     *
     * @return string
     */
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * Add producto
     *
     * @param \AppBundle\Entity\Producto $producto
     *
     * @return Comercio
     */
    public function addProducto(\AppBundle\Entity\Producto $producto)
    {
        $this->productos[] = $producto;

        return $this;
    }

    /**
     * Remove producto
     *
     * @param \AppBundle\Entity\Producto $producto
     */
    public function removeProducto(\AppBundle\Entity\Producto $producto)
    {
        $this->productos->removeElement($producto);
    }

    /**
     * Get productos
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getProductos()
    {
        return $this->productos;
    }
}
