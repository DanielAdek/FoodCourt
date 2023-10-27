import {NestFactory} from '@nestjs/core';
import {INestApplication, Logger} from "@nestjs/common";
import {SwaggerModule, DocumentBuilder, OpenAPIObject} from '@nestjs/swagger';
import {GlobalExceptionFilter} from "./exceptions/global.exception";
import {AppModule} from './app.module';

class Main {
  private static readonly logger = new Logger(Main.name);
  private static appConfig(app: INestApplication) {
    app.setGlobalPrefix("/api");
    app.enableCors();
    app.useGlobalFilters(new GlobalExceptionFilter());
  }

  private static apiDocsConfig(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('ORDER PROCESSING SYSTEM')
      .setVersion('2.0.0')
      .build();
    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }

  private static async main() {
    const app = await NestFactory.create(AppModule);

    this.appConfig(app);

    this.apiDocsConfig(app);

    await app.listen(process.env.PORT || 8080);
    this.logger.log("Application::Running")
  }

  public static async run() {
    await this.main()
  }
}

Main.run().catch(error => console.log(error.message));