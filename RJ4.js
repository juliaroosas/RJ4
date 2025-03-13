"Definição das classes"

class Telefone {
  constructor(numero) {
      this.numero = numero;
  }

  getNumero() {
      return this.numero;
  }

  getNumeroMaiusculo() {
      return this.numero.toUpperCase();
  }

  getNumeroMinusculo() {
      return this.numero.toLowerCase();
  }
}

class Endereco {
  constructor(rua, numero, cidade) {
      this.rua = rua;
      this.numero = numero;
      this.cidade = cidade;
  }

  getEndereco() {
      return this.rua + ", " + this.numero + ", " + this.cidade;
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
}

class Empresa {
  #cnpj;

  constructor(nome, cnpj, endereco) {
      this.nome = nome;
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

  gerarDescricao() {
      console.log("Empresa: " + this.nome + " (CNPJ: " + this.getCnpj() + ")");
      console.log("Endereço: " + this.endereco.getEndereco());
      console.log("Telefones: " + this.telefones.map(t => t.getNumero()).join(", "));
      console.log("\nClientes:");

      this.clientes.forEach(cliente => {
          console.log("- " + cliente.nome + " (CPF: " + cliente.getCpf() + ")");
          console.log("  Endereço: " + cliente.endereco.getEndereco());
          console.log("  Telefones: " + cliente.telefones.map(t => t.getNumero()).join(", "));
          console.log("");
      });
  }
}

"Criação da empresa"

const enderecoEmpresa = new Endereco("Rua Bacabal", 123, "São José dos Campos");
const empresa = new Empresa("Orbis", "12.345.678/0001-99", enderecoEmpresa);
empresa.adicionarTelefone(new Telefone("12-99999-8888"));
empresa.adicionarTelefone(new Telefone("12-98888-7777"));

"Criação de clientes"

const cliente1 = new Cliente("Ana", "111.222.333-44", new Endereco("Rua da Bromélias", 10, "São José dos Campos"));
cliente1.adicionarTelefone(new Telefone("12-91111-2222"));
cliente1.adicionarTelefone(new Telefone("12-92222-3333"));

const cliente2 = new Cliente("Bruno", "222.333.444-55", new Endereco("Rua das Azaleias", 20, "Taubaté"));
cliente2.adicionarTelefone(new Telefone("12-94444-5555"));
cliente2.adicionarTelefone(new Telefone("12-95555-6666"));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);

empresa.gerarDescricao();
