
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
<<<<<<< HEAD
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const APP_ROOT_DIR: string;
	export const BW_KMC_ROOT: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const COLOR: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DEV_CFG_ROOT: string;
	export const DEV_SETTINGS: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const ENV_SETTINGS_PATH: string;
	export const GIT_ASKPASS: string;
	export const GOOGLE_API_KEY: string;
	export const GOPATH: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const LANG: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_EXE: string;
	export const NPM_CLI_JS: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_author_email: string;
	export const npm_config_init_author_name: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const npm_config_open: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const OneDrive: string;
	export const OPENAI_API_KEY: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const POSH_THEMES_PATH: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
=======
	export const NVM_INC: string;
>>>>>>> 2204df425c88ee1d1fb3bb88d1a33a99d703d857
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const VITE_APP_ROOT_DIR: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_SHLVL: string;
	export const TERM_PROGRAM_VERSION: string;
<<<<<<< HEAD
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VITE_APP_ROOT_DIR: string;
	export const VITE_APP_ROOT_URL: string;
	export const VITE_POCKETBASE_IP: string;
	export const VITE_POCKETBASE_PORT: string;
	export const VITE_POCKETBASE_PROTOCOL: string;
	export const VITE_POCKETBASE_SERVE_DIR: string;
=======
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
>>>>>>> 2204df425c88ee1d1fb3bb88d1a33a99d703d857
	export const VITE_POCKETBASE_SERVE_HTTP: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const OPENAI_API_KEY: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const VITE_POCKETBASE_SERVE_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const VITE_POCKETBASE_IP: string;
	export const VIRTUAL_ENV: string;
	export const _CE_CONDA: string;
	export const GOOGLE_API_KEY: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const ENV_SETTINGS_PATH: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const VITE_POCKETBASE_PROTOCOL: string;
	export const VITE_APP_ROOT_URL: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const VITE_POCKETBASE_PORT: string;
	export const npm_config_npm_version: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
<<<<<<< HEAD
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const __COMPAT_LAYER: string;
=======
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_INJECTION: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VITE_SUPABASE_URL: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const VSCODE_PATH_PREFIX: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const VITE_SUPABASE_ANON_KEY: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const PKG_CONFIG_PATH: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const ENV_TEMPLATES_PATH: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const SECURITYSESSIONID: string;
	export const VIRTUAL_ENV_PROMPT: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
>>>>>>> 2204df425c88ee1d1fb3bb88d1a33a99d703d857
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
<<<<<<< HEAD
		ALLUSERSPROFILE: string;
		APPDATA: string;
		APP_ROOT_DIR: string;
		BW_KMC_ROOT: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		COLOR: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DEV_CFG_ROOT: string;
		DEV_SETTINGS: string;
		DriverData: string;
		EDITOR: string;
		ENV_SETTINGS_PATH: string;
		GIT_ASKPASS: string;
		GOOGLE_API_KEY: string;
		GOPATH: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		LANG: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE: string;
		NODE_ENV: string;
		NODE_EXE: string;
		NPM_CLI_JS: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_author_email: string;
		npm_config_init_author_name: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		npm_config_open: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		NUMBER_OF_PROCESSORS: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		OneDrive: string;
		OPENAI_API_KEY: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		POSH_THEMES_PATH: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
=======
		NVM_INC: string;
>>>>>>> 2204df425c88ee1d1fb3bb88d1a33a99d703d857
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		VITE_APP_ROOT_DIR: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_SHLVL: string;
		TERM_PROGRAM_VERSION: string;
<<<<<<< HEAD
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VITE_APP_ROOT_DIR: string;
		VITE_APP_ROOT_URL: string;
		VITE_POCKETBASE_IP: string;
		VITE_POCKETBASE_PORT: string;
		VITE_POCKETBASE_PROTOCOL: string;
		VITE_POCKETBASE_SERVE_DIR: string;
=======
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
>>>>>>> 2204df425c88ee1d1fb3bb88d1a33a99d703d857
		VITE_POCKETBASE_SERVE_HTTP: string;
		NVM_DIR: string;
		USER: string;
		OPENAI_API_KEY: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		VITE_POCKETBASE_SERVE_DIR: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		VITE_POCKETBASE_IP: string;
		VIRTUAL_ENV: string;
		_CE_CONDA: string;
		GOOGLE_API_KEY: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		ENV_SETTINGS_PATH: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		VITE_POCKETBASE_PROTOCOL: string;
		VITE_APP_ROOT_URL: string;
		npm_package_name: string;
		LANG: string;
		VITE_POCKETBASE_PORT: string;
		npm_config_npm_version: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
<<<<<<< HEAD
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
		__COMPAT_LAYER: string;
=======
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		VSCODE_INJECTION: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VITE_SUPABASE_URL: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		VSCODE_PATH_PREFIX: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		VITE_SUPABASE_ANON_KEY: string;
		VSCODE_GIT_IPC_HANDLE: string;
		PKG_CONFIG_PATH: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		ENV_TEMPLATES_PATH: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		SECURITYSESSIONID: string;
		VIRTUAL_ENV_PROMPT: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
>>>>>>> 2204df425c88ee1d1fb3bb88d1a33a99d703d857
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
