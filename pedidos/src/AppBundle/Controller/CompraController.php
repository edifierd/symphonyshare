<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use AppBundle\Entity\Compra;
use AppBundle\Entity\Pedido;

/**
 * @Route("/compra")
 */
class CompraController extends Controller
{
    /**
     * @Route("/new", name="compra_new")
     */
    public function newAction()
    {
    	$form = $this->createForm('AppBundle\Form\CompraType');

        return $this->render('compra/new.html.twig', [
        	'form' => $form->createView(),
        ]);
    }

    /**
    * @Route("/save", name="compra_save", options={"expose"=true})
    */
    public function save(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $comercioId = $request->request->get("comercio");

        $fecha      = \DateTime::createFromFormat('j M, Y', $request->request->get("fecha"));

        $comercio = $em->getRepository('AppBundle:Comercio')->find($comercioId);

        $compra = new Compra();
        $compra->setComercio($comercio);
        $compra->setFecha($fecha);

        $em->persist($compra);
        $em->flush();

        $productos = $comercio->getProductos(); 
        $serializer = $this->get('jms_serializer');
        $productosJSON = $serializer->serialize($productos, "json");


        return new JsonResponse(["ok" => true, "compraId" => $compra->getId(), "productos" => $productosJSON], JsonResponse::HTTP_OK);
    }

    /**
    * @Route("/savePedido", name="compra_pedido_save", options={"expose"=true})
    */
    public function savePedido(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $compra = $em->getRepository('AppBundle:Compra')->find($request->request->get("compra"));
        $cliente = $em->getRepository('AppBundle:Cliente')->find($request->request->get("cliente"));
        $producto = $em->getRepository('AppBundle:Producto')->find($request->request->get("producto"));

        $pedido = new Pedido();
        $pedido->setCliente($cliente);
        $pedido->setProducto($producto);
        $pedido->setCantidad($request->request->get("cantidad"));
        $pedido->setCompra($compra);

        $compra->addPedido($pedido);
        $em->flush();

        $pedidos = $compra->getPedidos(); 
        $serializer = $this->get('jms_serializer');
        $pedidosJSON = $serializer->serialize($pedidos, "json");


        return new JsonResponse(["ok" => true, "pedidos" => $pedidosJSON], JsonResponse::HTTP_OK);
    }

}
