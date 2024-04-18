<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use Faker\Factory;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create User Administrator
        $this->db->table('users')->insert($this->generateUser());
    }

    private function generateUser(): array
    {
        $faker = Factory::create();

        return [
            'name' => $faker->name(),
            'username' => 'admin',
            'password' => '21232f297a57a5a743894a0e4a801fc3',
            'created_at' => date("Y-m-d H:i:s"),
        ];
    }
}