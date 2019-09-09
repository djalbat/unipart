#include <stdint.h>

void reverse_array ( uint32_t *array, unsigned int length ) {
    for (int i = 0; i < length/2; ++i)
    {
        uint32_t temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }
}

