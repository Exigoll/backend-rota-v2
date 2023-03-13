import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

class UserResponse {
  @ApiProperty()
  @IsEmail(undefined, { message: 'Неверная почта' })
  email: string;

  @ApiProperty()
  @Length(6, 32, { message: 'Пароль должен содержать не менее 6 символов' })
  password: string;

  @ApiProperty()
  @Length(6, 42, {
    message:
      'Ф.И.О. / название организации должно содержать не менее 6 символов',
  })
  fullName: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @Length(12)
  address: string;

  @ApiProperty()
  legalForm: string;

  @ApiProperty()
  kindOfActivity: string;
}

export class AuthUserResponse {
  @ApiProperty()
  user: UserResponse;

  @ApiProperty()
  @IsString()
  token: string;
}
