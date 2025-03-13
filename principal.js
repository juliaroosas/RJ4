class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    getNumero() {
        return this.ddd + " " + this.numero;
    }

    getNumeroMaiusculo() {
        return this.getNumero().toUpperCase();
    }

    getNumeroMinusculo() {
        return this.getNumero().toLowerCase();
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getEndereco() {
        return "Estado: " + this.estado + " Cidade: " + this.cidade + " Rua: " + this.rua + " Número: " + this.numero;
    }

    getEnderecoMaiusculo() {
        return this.getEndereco().toUpperCase();
    }

    getEnderecoMinusculo() {
        return this.getEndereco().toLowerCase();
    }
}

class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = [];
    }

    getCpf() {
        return this.#cpf;
    }

    getCpfMaiusculo() {
        return this.#cpf.toUpperCase();
    }

    getCpfMinusculo() {
        return this.#cpf.toLowerCase();
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    removerTelefone(numero) {
        this.telefones = this.telefones.filter(tel => tel.getNumero() !== numero);
    }

    getDetalheCliente() {
        let detalhe = "Nome: " + this.nome.toUpperCase() + "\n";
        detalhe += this.endereco.getEndereco() + "\n";
        this.telefones.forEach(tel => {
            detalhe += "ddd: " + tel.ddd + " número: " + tel.numero + "\n";
        });
        return detalhe;
    }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = [];
        this.telefones = [];
    }

    getCnpj() {
        return this.#cnpj;
    }

    getCnpjMaiusculo() {
        return this.#cnpj.toUpperCase();
    }

    getCnpjMinusculo() {
        return this.#cnpj.toLowerCase();
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    detalhe() {
        let descricao = "Razão Social: " + this.razaoSocial + "\n";
        descricao += "Nome fantasia: " + this.nomeFantasia + "\n";
        descricao += "-----------------\n";

        this.clientes.forEach(cliente => {
            descricao += cliente.getDetalheCliente() + "\n";
        });

        return descricao;
    }
}

export { Telefone, Endereco, Cliente, Empresa };
