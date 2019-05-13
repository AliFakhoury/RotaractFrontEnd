<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AboutUsCommitteesController extends Controller
{
    /**
     * @Route("AboutUs/AboutUsCommittees", name="aboutUsCommittees")
     */
    public function indexAction(Request $request){
        return $this->render('AboutUs/aboutUsCommittees.html.twig');
    }
}
