import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";
import entidadesList from "../Entities/Des"; 

function dbsConfig(dbname:string, config:ConfigService, list:[]){
    type dbtype ='postgres'
    const myType:dbtype = 'postgres'
    return{
        type:myType,
        host:`${config.get<string>('DB_SERVER')}`,
        port:config.get<number>('DB_PORT'),
        username:config.get<string>('DB_USER'),
        password:config.get<string>('DB_PASSWORD'),
        database:config.get<string>(dbname),
        synchronize:false,
        entities:list,
        logging:false,
        options:{
            trustServerCertificate:true,
            poolSize:1,
        }
    }
}
@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal:true,
            envFilePath:'.env'
        }),
        TypeOrmModule.forRootAsync({
            name:'des',
            inject:[ConfigService],
            useFactory:(config:ConfigService)=>{
                return dbsConfig('DB_NAME_DES',config, entidadesList);
            }
        })
    ]
})
export class ORMModule {}