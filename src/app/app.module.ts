import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

/**
 * 导入其他模块时：
 *  如果是组件、指令或管道，那么需要在每个使用的模块都进行导入
 *  如果是服务，或者只用到了服务，那么一般来说在跟模块中导入一次即可
 *
 *  CommonModule: 提供绑定、×ngIF和×ngFor等基础指令，
 *      基本上每个模块都需要导入它
 *  FormsModule/ReactiveFormsModule: 表单模块，
 *      需要在每个需要的模块导入
 *  
 *  HttpClientModule/BrowserAnimationsModule/
 *    NoopAnimationsModule/只提供服务的模块：
 *      只在根模块导入一次即可
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FormsModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
