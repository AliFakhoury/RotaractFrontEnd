<?php
/**
 * Created by PhpStorm.
 * User: fakho
 * Date: 1/11/2018
 * Time: 4:41 PM
 */

namespace AppBundle\Entity;

use Doctrine\ORM\EntityRepository;

class projectImagesRepository extends EntityRepository {
    public function findProjectImages($projectId, $pageNumber, $perPage){
        $conn = $this->getEntityManager()->getConnection();

        $sql = "SELECT * FROM images WHERE is_deleted = 0 AND project_id = ".$projectId." LIMIT ".$perPage." OFFSET ".($perPage*($pageNumber-1));

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function findNumberOfImages($projectId){
        $conn = $this->getEntityManager()->getConnection();

        $sql = "SELECT COUNT(*) FROM images WHERE is_deleted = 0 AND project_id = ".$projectId;

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function findImagesOfProject($projectId){
        $conn = $this->getEntityManager()->getConnection();
        $sql = "SELECT images.image_url, images.thumbnail_url FROM images
                INNER JOIN projects ON projects.project_id = images.project_id
                WHERE images.project_id = ".$projectId;

        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $project = $stmt->fetchAll();

        return $project;
    }
}