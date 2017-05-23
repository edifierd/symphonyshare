<?php

namespace AppBundle\Entity;

use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use JMS\Serializer\Annotation\SerializedName;

use Doctrine\ORM\Mapping as ORM;

/**
 * Producto
 *
 * @ORM\Table(name="producto")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProductoRepository")
 * @ExclusionPolicy("all")
 */
class Producto
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Expose
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="descripcion", type="string", length=255)
     * @Expose
     * @SerializedName("descripcion")
     */
    private $descripcion;

    /**
     * Many Producto have One rubro.
     * @ORM\ManyToOne(targetEntity="Rubro", inversedBy="productos")
     * @ORM\JoinColumn(name="rubro_id", referencedColumnName="id")
     */
    private $rubro;

     /**
     * @ORM\ManyToMany(targetEntity="Comercio", mappedBy="productos")
     */
    private $comercios;


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
     * Set descripcion
     *
     * @param string $descripcion
     *
     * @return Producto
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    /**
     * Get descripcion
     *
     * @return string
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }



    /**
     * Set rubro
     *
     * @param \AppBundle\Entity\Rubro $rubro
     *
     * @return Producto
     */
    public function setRubro(\AppBundle\Entity\Rubro $rubro = null)
    {
        $this->rubro = $rubro;

        return $this;
    }

    /**
     * Get rubro
     *
     * @return \AppBundle\Entity\Rubro
     */
    public function getRubro()
    {
        return $this->rubro;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->comercios = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add comercio
     *
     * @param \AppBundle\Entity\Comercio $comercio
     *
     * @return Producto
     */
    public function addComercio(\AppBundle\Entity\Comercio $comercio)
    {
        $this->comercios[] = $comercio;

        return $this;
    }

    /**
     * Remove comercio
     *
     * @param \AppBundle\Entity\Comercio $comercio
     */
    public function removeComercio(\AppBundle\Entity\Comercio $comercio)
    {
        $this->comercios->removeElement($comercio);
    }

    /**
     * Get comercios
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComercios()
    {
        return $this->comercios;
    }
}
