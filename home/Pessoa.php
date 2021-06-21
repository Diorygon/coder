<?php

class Pessoa{
	
	protected $nome;
	protected $site;
	const ESPECIE = "Humana";

	public function __construct($tmpNome,$tmpSite)
	{
		$this->nome = $tmpNome;
		$this->site = $tmpSite;

		echo "<br>Objeto ".__CLASS__." foi instanciado.<br>";
	}

	public function setNome($novoNome){
		$this->nome = $novoNome;
	}

	public function getNome(){
		return $this->nome;
	}

	public function setSite($novoSite){
		$this->site = $novoSite;
	}

	public function getSite(){
		return $this->site;
	}

}