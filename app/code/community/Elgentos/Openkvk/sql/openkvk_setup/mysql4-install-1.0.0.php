<?php

$installer = $this;
$setup = new Mage_Eav_Model_Entity_Setup('core_setup');
$installer->startSetup();

$setup->addAttribute('customer', 'kvk', array(
	'label'     => 'KvK nummer',
	'type'      => 'varchar',
	'input'     => 'text',
	'visible'   => true,
	'required'  => false,
	'position'  => 1,
));