<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AboutUsController extends Controller
{
    /**
     * @Route("/AboutUs", name="aboutUs")
     */
    public function indexAction(Request $request){
        return $this->render('AboutUs/aboutUs.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }
}
