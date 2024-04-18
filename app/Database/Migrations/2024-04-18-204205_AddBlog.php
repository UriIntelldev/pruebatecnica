<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddBlog extends Migration
{
    public function up()
    {
        // Create Blog Table
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'title' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
                'null' => false
            ],
            'author' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
                'null' => false,
            ],
            'creationdate' => [
                'type' => 'date',
                'null' => true,
            ],
            'content' => [
                'type' => 'TEXT',
                'null' => false
            ],
            'created_at' => [
                'type' => 'datetime',
                'null' => true,
            ],
            'updated_at datetime default current_timestamp',
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('blogs');
    }

    public function down()
    {
        // Delete Blog Table
		$this->forge->dropTable('blogs');
    }
}
