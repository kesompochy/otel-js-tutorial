import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: "db",
			port: 3306,
			username: "user",
			password: "password",
			database: "db",
			entities: [],
			synchronize: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
