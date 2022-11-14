<?php

/**
 * Extension Manager/Repository config file for ext "wng_site".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'WNG site ext 11.5',
    'description' => 'WNG site ext 11.5',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.2.0-11.5.99',
            'fluid_styled_content' => '10.2.0-11.5.99',
            'rte_ckeditor' => '10.2.0-11.5.99',
            'news' => '8.0.0-',
            'gridelements' => '10.0.0-',
            'powermail' => '8.3.1-',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'WngSa\\WngSite\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Raphaël Splivalo',
    'author_email' => 'rsp@wng.ch',
    'author_company' => 'WNG SA',
    'version' => '1.0.0',
    'test' => 'test'
];