<?php

namespace AppBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Rubro;

class LoadUserData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $rubro = new Rubro();
        $rubro->setDescripcion('Pizzas');

        $rubro2 = new Rubro();
        $rubro2->setDescripcion('Empanadas');

        $rubro3 = new Rubro();
        $rubro3->setDescripcion('Parrila');

        $manager->persist($rubro);
        $manager->persist($rubro2);
        $manager->persist($rubro3);
        $manager->flush();
    }
}