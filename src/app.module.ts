import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CasosModule } from './casos/casos.module';

@Module({
  imports: [UsuarioModule, CasosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
