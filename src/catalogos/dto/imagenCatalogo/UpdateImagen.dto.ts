import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenCatalogoDto } from './CreateImagenCatalogo.dto';

export class UpdateImagenCatalogoDto extends PartialType(CreateImagenCatalogoDto) {}
