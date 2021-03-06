angular.module('PokemonModule')
.constant('Mensagens', {
    MENSAGEM_INCLUIR_SUCESSO: 'Pokemon incluído com sucesso.',
    MENSAGEM_EXCLUIR_SUCESSO: 'Pokemon excluído com sucesso',
    MENSAGEM_ALTERAR_SUCESSO: 'Pokemon alterado com sucesso',
    MENSAGEM_LOGIN_SUCESSO: 'Login efetuado com sucesso!',
    MENSAGEM_LOGIN_ERROR: 'Usuário ou senha inválido!'

}).constant('TipoMensagem', {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARNING: 'WARNING'
});