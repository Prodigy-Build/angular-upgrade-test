import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

export class SwaggerAuthorizeCheckOperationFilter implements IOperationFilter {
  apply(operation: SwaggerApiOperation, context: SwaggerOperationFilterContext): void {
    // Check for authorize attribute
    const hasAuthorize =
      context?.handler?.method?.decorators?.some((decorator) =>
        decorator === AuthGuard()
      ) ||
      context?.handler?.parent?.class?.decorators?.some((decorator) =>
        decorator === AuthGuard()
      );

    if (!hasAuthorize) return;

    operation.responses['401'] = { description: 'Unauthorized' };
    operation.responses['403'] = { description: 'Forbidden' };

    operation.security = [{ Bearer: [] }];
  }
}