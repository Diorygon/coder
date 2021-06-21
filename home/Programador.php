<?php

class Programador extends Pessoa{

	protected $linguagem;

	public function __construct($tmpNome,$tmpLinguagem)
	{
		$this->nome = $tmpNome;
		$this->linguagem = $tmpLinguagem;

		echo "<br>Objeto ".__CLASS__." foi instanciado.<br>";

	}

	public function setLinguagem($novoLinguagem){
		$this->linguagem = $novoLinguagem;
	}

	public function getLinguagem(){
		return $this->linguagem;
	}

}