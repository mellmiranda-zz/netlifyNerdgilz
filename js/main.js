let form = $('.formulario')

form.validate({
    errorElement: 'span',

    rules: {
        nome: 'required',
        celular: 'required',
        email: {
            required: true,
            email: true,
        },
        mensagem: 'required',
    },

    messages: {
        nome: 'Por favor, digite seu nome.',
        celular: 'Por favor, digite seu celular.',
        email:{
            required: 'Por favor, digite seu e-mail.',
            email: 'Por favor, digite um e-mail válido!'
        },
        mensagem: 'Por favor, digite uma mensagem.',
    }
});