import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards';
import { ACGuard } from 'nest-access-control';

export function Auth() {
  return applyDecorators(
    UseGuards(JwtAuthGuard, ACGuard),
    ApiBearerAuth(),
  );
}
