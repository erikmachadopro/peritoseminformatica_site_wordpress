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
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'D:\laragon\www\peritoseminformatica_site_wordpress\wp-content\plugins\wp-super-cache/' );
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
define( 'AUTH_KEY',         '1AKT/~j0>K(vB~jh`LEwxnY:o:fCm2w$e|~H`@#HIGOVtf5:]DB;Qc6H.]cLrDm`' );
define( 'SECURE_AUTH_KEY',  'ae(@gOr@Wm{Oq79X/c6 u}%ft#`a`y:~3M]V6GHxglA-tZ?C+fKjBcM/`WXK<J7c' );
define( 'LOGGED_IN_KEY',    '~ufJx Ky(A7+DW(iM0UfMh+#sb2f_*1ZL+O1:GNR}q Q6l0Qe 5JpQ]EC;y.8NII' );
define( 'NONCE_KEY',        '+DRTzMi]<hgiNmcQ-c*-qOg=3ik9qp%84Rm^jJv*:=[;HRra(h^ytkV|ZS(-~d/T' );
define( 'AUTH_SALT',        'd4P!f2EgScsr.bcI1W5q^nlW=^ccXsRf+xKff4xpGAsF R[(E#^Ba(U}=5VCQ-^f' );
define( 'SECURE_AUTH_SALT', '$2yxuxi,Qg>6QM*1 Ei{uX(J0M18+3HlAomnX5Ut_aW284j%B0<aFdjVovd1WFfw' );
define( 'LOGGED_IN_SALT',   'vYO0W*bTB?,~5]yUuF#zsQgQq9|X;6!y1`TPE$4f$c[ 7P8Mw3%. {g]#bZnJh70' );
define( 'NONCE_SALT',       'J=7)HoXV+D~ZPeTk^4|fFK=PshJ@d9%#L-LVV:I*EFpTzzK&2{YeY-uP.~F3bwY}' );

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
