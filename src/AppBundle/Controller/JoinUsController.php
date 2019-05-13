<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class JoinUsController extends Controller{
    /**
     * @Route("/joinUs", name="joinUs")
     */
    public function indexAction(Request $request){
        return $this->render('JoinUs/JoinUs2.html.twig');
    }

    /**
     * @Route("/sendMessage", name="joinUsForm")
     */
    public function returnFunction(Request $request){
        if($request->isXmlHttpRequest()){
            $name = $request->get('senderName');
            $email = $request->get('senderEmail');
            $phoneNumber = $request->get('senderNumber');
            $message = $request->get('senderMessage');

            $repo = $this->getDoctrine()->getRepository('AppBundle:Message');
            $repo->writeMessage($name, $email, $phoneNumber, $message);

            return new JsonResponse($name);
        }

        return new JsonResponse(null);
    }
}
