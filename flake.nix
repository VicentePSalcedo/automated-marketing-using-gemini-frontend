{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
    in
    {
      devShells."${system}".default =
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        pkgs.mkShell {
          packages = with pkgs; [
            angular-language-server
            nodejs_23
            nodePackages."@angular/cli"
            prettierd
            typescript-language-server
            vscode-langservers-extracted
          ];
          shellHook = '''';
        };
    };
}
