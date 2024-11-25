import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './CreateCliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {}
