<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MainPageController extends Controller
{
    /**
     * @Route("/home", name="homepage")
     */
    public function indexAction(Request $request){
        $projectRepo = $this->getDoctrine()->getRepository('AppBundle:Projects');
        $userRepo = $this->getDoctrine()->getRepository('AppBundle:User');

        $latestProjects = $projectRepo->findLatestProjects();
        $numberOfProjects = $projectRepo->projectsNumber();
        $numberOfMembers = $userRepo->usersNumber();

        return $this->render('Home/home.html.twig', [
            'projects' => $latestProjects,
            'numberOfProjects' => $numberOfProjects["COUNT(*)"],
            'numberOfUsers' => $numberOfMembers["COUNT(*)"]
        ]);
    }

    /**
     * @Route("home/contactInfo", name="contactUs")
     */
    public function contactAction(Request $request){

    }
}
