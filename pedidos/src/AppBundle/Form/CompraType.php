<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class CompraType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
          ->add('fecha', DateType::Class, [
                'label' => 'Fecha',
                'widget' => 'single_text',
                'attr' => [
                    'class'       => 'datepicker',
                    'placeholder' => 'Fecha'
                ]
          ])
          ->add('comercio', EntityType::Class, [
                'label'  => 'Comercio',
                'class' => 'AppBundle:Comercio',
                'placeholder' => 'Comercio'                                  
            ])
          ->add('cliente', EntityType::Class, [
                'label'  => 'Cliente',
                'class' => 'AppBundle:Cliente',
                'placeholder' => 'Cliente'                                  
            ])
          ->add('producto', ChoiceType::Class, [
                'label'  => 'Producto',
                'placeholder' => 'Producto'                                  
            ])
          ->add('cantidad', NumberType::Class, [
                'label'  => 'Cantidad',
                'attr' => [
                    'class'       => 'validate',
                    'placeholder' => 'Cantidad'
                ]                               
            ])
            ->add('compra', HiddenType::Class)

        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver){}

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'compra';
    }


}
