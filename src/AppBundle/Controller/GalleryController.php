<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GalleryController extends Controller
{
    /**
     * @Route("/gallery", name="gallery")
     */
    public function indexAction(Request $request){
        $repo = $this->getDoctrine()->getRepository('AppBundle:Projects');

        $projects = $repo->findProjectForWhatWeDo();

        return $this->render('Gallery/gallery.html.twig', [
            'projects' => $projects,
        ]);
    }


    /**
     * @Route("/gallery/project/{id}", name="projectGallery")
     */
    public function projectAction(Request $request, $id){
        $repoProject = $this->getDoctrine()->getRepository('AppBundle:Projects');
        $repoProjectImages = $this->getDoctrine()->getRepository('AppBundle:Images');

        $project = $repoProject->findProjectByIdView($id);
        $projectImages = $repoProjectImages->findImagesOfProject($id);

        return $this->render('Gallery/singleProjectGallery.html.twig', [
            'images' => $projectImages,
            'projectName' => $project["project_name"],
            'projectDate' => $project["date_of_project"]
        ]);
    }
}
