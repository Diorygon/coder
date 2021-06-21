<?php

require "Pessoa.php";
require "Programador.php";

#GET e SET
$pessoa = new Pessoa("Diego","www.diorygon.com");

echo "Nome: ".$pessoa->getNome()."<br>";
echo "Site: ".$pessoa->getSite()."<br>";


#Herança
$programador = new Programador("Diego", "PHP");
echo "Nome: ".$programador->getNome()."<br>";
echo "Linguagem: ".$programador->getLinguagem()."<br>";

#Constante
/*echo $programador::ESPECIE;
echo $pessoa::ESPECIE;*/



