import { Entidade } from './Entidade';
import { HierarquiaOrganizacional } from './HierarquiaOrganizacional';

export class Pessoa {
  Id!: number;
  CriadoDatahora!: Date;
  ModificadoDatahora!: Date;
  Excluido!: boolean;
  CriadoPor?: number;
  Email!: string;
  Senha!: string;
  Cenario!: string;
  IdHierarquiaOrganizacional?: number;
  IdUnidadeOrganizacional?: number;
  // CnhCategoria
  CnhVencimento?: Date;
  Matricula?: string;
  SenhaMotorista?: string;
  Cpf?: string;

  CriadoPorEntidade!: Entidade;
  Entidade!: Entidade;
  Unidade!: Entidade;
  HierarquiaOrganizacional!: HierarquiaOrganizacional;
}
