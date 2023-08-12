import { Module } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { AuthorService } from './auth.service'
import { AuthorController } from './auth.controller'

@Module({
  providers: [PrismaService, AuthorService],
  controllers: [AuthorController],
})
export class AuthorModulle {}
