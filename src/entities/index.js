import { Campaign } from '@/entities/Campaign.js';
import { MondayNewsletter } from '@/entities/Templates/MondayNewsletter.js';
import { TableQuery } from '@/entities/TableQuery.js';
import { OriginHref } from '@/entities/OriginHref.js';
import { SlugImage } from '@/entities/SlugImage.js';
import { Image } from '@/entities/Image.js';
import { TemplateLinks } from '@/entities/TemplateLinks.js';
import { MondayCategoryProducts } from '@/entities/MondayCategoryProducts.js';
import { ProductInstance } from '@/entities/ProductInstance.js';
import { MondayFreebieNewsletter } from '@/entities/Templates/MondayFreebieNewsletter.js';
import { FreebieItem } from '@/entities/FreebiewItem.js';
import { TableQueryCSV } from '@/entities/TableQueryCSV.js';
import { TableQueryHeader } from '@/entities/TableQueryHeader.js';
import { TableQueryFooter } from '@/entities/TableQueryFooter.js';
import { TableQueryTranslationTemplates } from '@/entities/TableQueryTranslationTemplates.js';
import { TableQueryCategoryLinks } from '@/entities/TableQueryCategoryLinks.js';
import { TableQueryCategoryTitles } from '@/entities/TableQueryCategoryTitles.js';
import { MondayFreebieLanding } from '@/entities/Templates/MondayFreebieLanding.js';

export const entities = {
  Campaign,
  MondayNewsletter,
  MondayFreebieLanding,
  TableQuery,
  OriginHref,
  SlugImage,
  Image,
  TemplateLinks,
  MondayCategoryProducts,
  ProductInstance,
  MondayFreebieNewsletter,
  FreebieItem,
  TableQueryCSV,
  TableQueryHeader,
  TableQueryFooter,
  TableQueryTranslationTemplates,
  TableQueryCategoryLinks,
  TableQueryCategoryTitles,
};
