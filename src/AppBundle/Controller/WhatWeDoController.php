<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class WhatWeDoController extends Controller
{
    /**
     * @Route("/WhatWeDo", name="whatWeDo")
     */
    public function indexAction(Request $request){
        $repo = $this->getDoctrine()->getRepository('AppBundle:Projects');

        $projects = $repo->findProjectForWhatWeDo();

        return $this->render('WhatWeDo/WhatWeDo.html.twig', [
            'projects' => $projects,
        ]);
    }

    /**
     * @Route("/WhatWeDo/project/{id}", name="project")
     */
    public function projectAction(Request $request, $id){
        $repo = $this->getDoctrine()->getRepository('AppBundle:Projects');

        $project = $repo->findProjectByIdView($id);
        dump($project);
        return $this->render('WhatWeDo/singleProject.html.twig', [
            'projectName' => $project["project_name"],
            'description' => $project["description"],
            'projectDate' => $project["date_of_project"],
        ]);
    }
}