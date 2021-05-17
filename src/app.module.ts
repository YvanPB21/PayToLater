import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { ProfileModule } from './modules/profile/profile.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { ProfileService } from './modules/profile/profile.service';

@Module({
  imports: [
    ProductModule,
    UserModule,
    ProfileModule,
    DatabaseModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
