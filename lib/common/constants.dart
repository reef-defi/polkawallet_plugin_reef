import 'package:flutter/material.dart';

const int SECONDS_OF_DAY = 24 * 60 * 60; // seconds of one day
const int SECONDS_OF_YEAR = 365 * 24 * 60 * 60; // seconds of one year

const node_list_reef = [
  {
    'name': 'Reef Mainnet #1',
    'ss58': 42,
    'endpoint': 'wss://rpc.reefscan.com/ws',
  }
  // {
  //   'name': 'Edgeware Mainnet #2 (hosted by Commonwealth Labs)',
  //   'ss58': 7,
  //   'endpoint': 'wss://mainnet2.edgewa.re/',
  // },
  // {
  //   'name': 'Edgeware Mainnet #3 (hosted by Commonwealth Labs)',
  //   'ss58': 7,
  //   'endpoint': 'wss://mainnet3.edgewa.re/',
  // },
  //{
//    'name': 'Edgeware Mainnet #4 (hosted by Commonwealth Labs)',
//    'ss58': 7,
//    'endpoint': 'wss://mainnet4.edgewa.re/',
//  },
//  {
//    'name': 'Edgeware Mainnet #5 (hosted by Commonwealth Labs)',
//    'ss58': 7,
//    'endpoint': 'wss://mainnet5.edgewa.re/',
//  },
//  {
//    'name': 'Edgeware Mainnet #6 (hosted by Commonwealth Labs)',
//    'ss58': 7,
//    'endpoint': 'wss://mainnet6.edgewa.re/',
//  },
//  {
//    'name': 'Edgeware Mainnet #7 (hosted by Commonwealth Labs)',
//    'ss58': 7,
//    'endpoint': 'wss://mainnet7.edgewa.re/',
//  },
//  {
//    'name': 'Edgeware Mainnet #8 (hosted by Commonwealth Labs)',
//    'ss58': 7,
//    'endpoint': 'wss://mainnet8.edgewa.re/',
//  },
//  {
//    'name': 'Edgeware Mainnet #9 (hosted by Commonwealth Labs)',
//    'ss58': 7,
//    'endpoint': 'wss://mainnet9.edgewa.re/',
//  },
];


const MaterialColor reef_purple = const MaterialColor(
  0xFF681cff,
  const <int, Color>{
    50: const Color(0xFFdacbf9),
    100: const Color(0xFFcab4f7),
    200: const Color(0xFFcab4f7),
    300: const Color(0xFFb798f7),
    400: const Color(0xFFb798f7),
    500: const Color(0xFF9565f7),
    600: const Color(0xFF7f46f4),
    700: const Color(0xFF7f46f4),
    800: const Color(0xFF5406f4),
    900: const Color(0xFF5406f4),
  },
);

// const home_nav_items = ['staking', 'governance'];
const home_nav_items = ['staking'];

const String genesis_hash_reef =
    '0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b';
const String network_name_reef = 'reef';
