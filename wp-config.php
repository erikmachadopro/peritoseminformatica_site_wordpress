<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'peritos_site' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's2_$,ueaA1jD%I!U&6#s9$DPlc8g=1;uv=c2=]P4VS[P+~^hgaV U +{k.{2zrA=' );
define( 'SECURE_AUTH_KEY',  'Bb ,i]fE%/BqDh<vDqXVt1M0w-Jz8[$+anI=.RPo+69bFv yD^|Nk+2~.)dLiM2(' );
define( 'LOGGED_IN_KEY',    't1,OD0vtv_HHk3]o5(L{BTksZ:DRg-xmf4-oo*wt2$T/0l#lMBh`li62pEd5xR/w' );
define( 'NONCE_KEY',        ':6AFyE$&F+LNe0]rgK.qFAG_oIn1nAcWTtE`*2B<NPPAYk;jvQGoCO)ojInPg9/6' );
define( 'AUTH_SALT',        'Y #5)S(,0.:=IMcPKG0!2a!k1m1S^/&]3*gM&a0!U+x7]}Xn^I]k#HEueHb88(pS' );
define( 'SECURE_AUTH_SALT', ':o8de(tVLxJjLEQ#o A4baXm.AfyGz)VErcYOT, ;)/rf,IM:sfqC7<AgYz{r&qE' );
define( 'LOGGED_IN_SALT',   'C-Om*Cb ,Hb(^XnPUoVR(=Yf8F=z3O^R;%DT>kWq[6edLyS5c~*/EKZ5~A!ieQ/7' );
define( 'NONCE_SALT',       '2:PWJ5&!l{Z3r&[hU_DLH4nym=vF0Dt,*^*lVo55h+~UA.<h4tLy=eWU$ZaYW8&~' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_lz';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
