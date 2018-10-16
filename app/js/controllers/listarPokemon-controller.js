
angular.module('PokemonModule')
    .controller('ListarPokemonController', ListarPokemonController);

ListarPokemonController.$inject = ['$scope', '$rootScope', '$location', 'PokemonService', 'Mensagens', 'TipoMensagem'];

function ListarPokemonController($scope, $rootScope, $location, PokemonService, Mensagens, TipoMensagem) {

    var self = this;
    self.service = PokemonService;

    self.init = function () {
        self.service.pokemons.forEach(pokemon => {
            self.setTipo(pokemon);
        });
    };

    self.novoPokemon = function() {
        $location.path("/cadastrar");
    };

    self.editar = function(pokemon, index) {
        pokemon.index = index;
        self.service.pokemonSelecionado = pokemon;
        $location.path("/cadastrar");
    };

    self.setTipo = function (pokemon) {
        self.service.tipos.forEach(tipo => {
            if (pokemon.tipo === tipo.codigo) {
                pokemon.descricaoTipo = tipo.descricao;
            }
        });
    };

    self.excluir = function (index) {
        self.service.pokemons.splice(index, 1);
        $rootScope.limparMensagens();
        $rootScope.addMensagem({ texto: Mensagens.MENSAGEM_EXCLUIR_SUCESSO, tipo: TipoMensagem.SUCCESS }, false, true);
    };

}