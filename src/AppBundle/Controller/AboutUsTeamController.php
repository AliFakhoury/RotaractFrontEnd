<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AboutUsTeamController extends Controller
{
    /**
     * @Route("/team", name="team")
     */
    public function indexAction(Request $request){
        $em = $this->getDoctrine()->getRepository('AppBundle:User');

        $profiles = $em->usersForTeamPage();

        $president = $profiles[0];

        array_shift($profiles);

        return $this->render('AboutUs/aboutUsTeam.html.twig', [
            'president' => $president,
            'members' => $profiles,
        ]);
    }
}
