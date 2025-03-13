
import { Telefone, Endereco, Cliente, Empresa } from './principal.js';


const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av. Andrômeda", 987);
const empresa = new Empresa("ABC LTDA", "Orbis", "12.345.678/0001-99", enderecoEmpresa);
empresa.adicionarTelefone(new Telefone("12", "999999999"));
empresa.adicionarTelefone(new Telefone("12", "988888888"));

const cliente1 = new Cliente("Vitória", "111.222.333-44", new Endereco("SP", "São José dos Campos", "Av. Bacabal", 987));
cliente1.adicionarTelefone(new Telefone("12", "999999999"));
cliente1.adicionarTelefone(new Telefone("12", "999999990"));

const cliente2 = new Cliente("Lauro", "222.333.444-55", new Endereco("SP", "São José dos Campos", "Av. Anchieta", 412));
cliente2.adicionarTelefone(new Telefone("12", "888888888"));
cliente2.adicionarTelefone(new Telefone("12", "888888881"));

const cliente3 = new Cliente("Olívia", "333.444.555-66", new Endereco("SP", "São José dos Campos", "Av. São João", 789));
cliente3.adicionarTelefone(new Telefone("12", "777777777"));
cliente3.adicionarTelefone(new Telefone("12", "777777772"));

const cliente4 = new Cliente("Márcia", "444.555.666-77", new Endereco("SP", "São José dos Campos", "Av. Jorge Zarur", 452));
cliente4.adicionarTelefone(new Telefone("12", "666666666"));
cliente4.adicionarTelefone(new Telefone("12", "666666663"));

const cliente5 = new Cliente("Gustavo", "555.555.666-77", new Endereco("SP", "São José dos Campos", "Av. Heitor Villa-Lobos", 342));
cliente5.adicionarTelefone(new Telefone("12", "555555555"));
cliente5.adicionarTelefone(new Telefone("12", "555555554"));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe());
