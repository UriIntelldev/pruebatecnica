<?php

namespace App\Models;

use CodeIgniter\Model;

class BlogModel extends Model
{

    protected $table                = "blogs";
    protected $primaryKey           = 'id';
    protected $allowedFields = [
        'id', 
        'title', 
        'author', 
        'creationdate', 
        'content', 
        'created_at', 
        'updated_at'
    ];

    protected $useTimestamps        = true;
    protected $createdField         = 'created_at';
    protected $updatedField         = 'updated_at';

    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;

    
    public function getBlogsByTitle($str){
        $query = $this->db->query('SELECT * FROM ' . $this->table .' WHERE title like "%'.$str.'%" ');
        return $query->getResult();
    }

    public function getBlogsByContent(){
        $query = $this->db->query('SELECT * FROM ' . $this->table .' WHERE content like "%'.$str.'%" ');
        return $query->getResult();
    }

    public function getBlogsByAutor(){
        $query = $this->db->query('SELECT * FROM ' . $this->table .' WHERE author= "%'.$str.'%" ');
        return $query->getResult();
    }

}