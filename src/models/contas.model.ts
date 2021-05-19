import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Contas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'any',
  })
  saldo?: any;

  @property({
    type: 'any',
  })
  limiteSaqueDiario?: any;

  @property({
    type: 'boolean',
    default: false,
  })
  falgAtivo?: boolean;

  @property({
    type: 'number',
  })
  tipoConta?: number;

  @property({
    type: 'date',
  })
  dataCriacao?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Contas>) {
    super(data);
  }
}

export interface ContasRelations {
  // describe navigational properties here
}

export type ContasWithRelations = Contas & ContasRelations;