import { IsString, IsEnum, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';
import { Role } from '../../common/enums/role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  departmentId: string;

  @IsString()
  @IsOptional()
  position: string;

  @IsString()
  @IsOptional()
  dateOfBirth: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  profileImageUrl: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @IsString()
  @IsOptional()
  departamentId: string;  
}